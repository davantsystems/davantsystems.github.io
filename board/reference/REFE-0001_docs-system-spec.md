---
type: reference
created: 2026-01-23
---
# Documentation System Specification

> **Status:** Active

This defines a documentation and project management system designed for human-AI collaboration. The specification is split into two parts:

- **Part 1: Framework** — Tool-agnostic organizational principles that work anywhere (digital or paper)
- **Part 2: Implementation** — Obsidian, REST API, and Claude Code specifics

---

# Part 1: The Framework

This framework can be applied to any project using any tools — from sophisticated software to index cards.

## Guiding Principles

These are the axioms that inform every design decision in this system:

### 1. Never Rely on Discipline

Human willpower, memory, and routine are points of failure. They will fail — it's a matter of when, not if. The system must be designed so that:
- Nothing falls through the cracks due to forgotten reviews
- No periodic "check on X" rituals are required
- Relevant context surfaces automatically when needed

### 2. Explicit Over Implicit

Every outcome must be resolved explicitly. No vague items lingering in documents.
- ADRs must list spawned items or state "no follow-up needed"
- TASKs are actionable or they're not TASKs yet
- If something is worth tracking, decide what type it is

### 3. Write-Once Artifacts

Documents should be written once and not require ongoing maintenance.
- ADRs are immutable historical records
- Status reflects validity, not workflow
- No "update this when X happens" requirements

### 4. One Home for Each Concern

Every type of information has exactly one place:
- Work to do → TASK
- Decisions made → ADR
- Domain knowledge → REFE
- Unrefined thoughts → NOTE
- External material → RESO

No overlap. No ambiguity about where something belongs.

### 5. Binary Actionability

Something is either actionable or it's not. No intermediate states.
- If you can write the first concrete step → TASK
- If it's still fuzzy → NOTE (refine until it's a TASK, or discard)
- No "maybe someday" purgatory

### 6. Simple Over Complex

Resist the pull toward JIRA/PM complexity hell.
- Minimal status values (3 for TASKs, 3 for ADRs)
- No custom fields proliferation
- If a workflow feels heavy, question whether it's necessary

### 7. The Artifact is Separate from the Work

- TASK = the work to be done
- ADR = the artifact produced by decision work
- REFE = the artifact produced by knowledge extraction
- Don't conflate process with output

## Design Goals

1. **Single source of truth** — metadata lives with the document, no separate index to maintain
2. **Self-identifying files** — type and ID visible in filename
3. **Standalone files** — each file makes sense without the organizational system
4. **Query-friendly** — structured metadata enables filtering and search
5. **Portable** — plain text (markdown + YAML) works anywhere

## Document Types

### Overview

| Type | Purpose | Status Values |
|------|---------|---------------|
| TASK | Actionable work item | `backlog` → `current` → `done` |
| EPIC | Container for related tasks | `planning` → `current` → `done` |
| ADR | Immutable decision record | `active` \| `superseded` \| `deprecated` |
| REFE | Evergreen knowledge base | *(none)* |
| RESO | External material to process | `inbox` → `processing` → `processed` |
| NOTE | Unrefined thoughts (inbox) | `inbox` → `processed` |

### TASK (Actionable Work)

A TASK is a single, completable unit of work. If it can't be done in one focused effort, split it into multiple TASKs under an EPIC.

**Required metadata:**
- `type: task`
- `status`: `backlog` | `current` | `done`
- `created`: date

**Optional metadata:**
- `priority`: `1` (high) | `2` (medium) | `3` (low)
- `due`: target completion date
- `blocked_by`: list of blocking tasks
- `parent`: link to parent epic/task
- `tags`: list of cross-cutting tags

#### Task Dependencies (blocked_by)

The `blocked_by` field documents task dependencies. It is **informational**, not a system-enforced constraint.

**Key points:**
- Status remains workflow-only (`backlog`/`current`/`done`) — no separate "blocked" status
- A task with `blocked_by` stays in `backlog` until blockers are `done`
- When choosing what to work on, tasks with unresolved blockers are skipped

**Determining if a task is actionable:**
1. Status is `backlog` (not already current or done)
2. Either `blocked_by` is empty/missing, OR all tasks in `blocked_by` have `status: done`

#### Derived vs Explicit State

The "is actionable" state is **derived**, not explicit:

| Approach | How it works | Trade-off |
|----------|--------------|-----------|
| **Derived** (our approach) | Computed on-demand from `blocked_by` + blocker statuses | Requires computation, but always accurate |
| **Explicit** (avoided) | Stored as field like `actionable: true` | Requires updating when blockers change |

**Why derived is better:**
- **No sync discipline** — Nothing to update when blockers complete
- **Single source of truth** — Each task owns only its own `status`
- **Can't get stale** — Computed from current state

This aligns with Principle #1 (Never Rely on Discipline).

### EPIC (Initiative Container)

Epics are containers for related tasks. They track overall progress of a larger initiative.

**Required metadata:**
- `type: epic`
- `status`: `planning` | `current` | `done`
- `created`: date

**Optional metadata:**
- `tasks`: list of child task links
- `tags`: list of cross-cutting tags

**Rule of thumb:** If it can't be completed in a single focused effort, it's probably an epic that should be split into tasks.

### ADR (Architecture Decision Record)

ADRs are **immutable historical records of decisions already made**. They document what was tried, what was decided, and why. ADRs are written *after* a decision is made, not during the decision-making process.

> **Key principle**: If you need to track "we must decide X", that's a TASK. The ADR is the artifact produced when the TASK completes.

**Required metadata:**
- `type: adr`
- `status`: `active` | `superseded` | `deprecated`
- `context_date`: when this decision was made
- `created`: date

**Optional metadata:**
- `superseded_by`: link to ADR that supersedes this one
- `tags`: list of cross-cutting tags

#### ADR Status (Validity, Not Workflow)

ADR status reflects whether the decision still applies, not where it is in a process:

| Status | Meaning |
|--------|---------|
| `active` | This decision still applies to the project |
| `superseded` | Replaced by a newer ADR (link in `superseded_by`) |
| `deprecated` | No longer relevant (context changed, feature removed, etc.) |

There is no `proposed` or `pending` status. Decision-making work is tracked as TASKs.

#### ADR Document Structure

```markdown
# ADR-NNNN: Title (Decision Summary)

## Context
What problem were we solving? What was the situation that required a decision?

## Considered Approaches
What options did we evaluate? Include enough detail to avoid re-trying failed approaches.

### Approach 1: Name
- What it involves
- Pros and cons
- Why selected or rejected

### Approach 2: Name
...

## Decision
What we decided and why. Be explicit about the rationale.

## Consequences
Effects of this decision — both positive and negative. What trade-offs are we accepting?

## Spawned Items
Explicit list of artifacts created from this ADR. **All outcomes must be resolved here.**

- [[REFE-0008_smoothing-algorithms]] — domain knowledge extracted
- [[TASK-0010_research-bilateral-filtering]] — follow-up exploration
- No other action needed.
```

#### What ADRs Can Spawn

ADRs must have explicit, closed outcomes. Every follow-up becomes a concrete item:

| Outcome Type | Spawns | Example |
|--------------|--------|---------|
| Domain knowledge learned | REFE | "How smoothing algorithms work" |
| Actionable work (any kind) | TASK | "Research bilateral filtering feasibility" |
| New decision needed | TASK | "Determine approach for X" → future ADR |
| Just context | Nothing | Note in Consequences: "No follow-up needed" |

**ADRs never spawn NOTEs.** If something is worth capturing, decide what it is (TASK or REFE). If it's too vague to categorize, it's not worth tracking separately — leave it as context in the Consequences section.

#### ADR Lifecycle

```
Problem identified
    → TASK: "Decide on approach for X"
    → Work happens, decision made
    → ADR written (status: active)
    → TASK completed (links to ADR)
    → ADR spawns TASKs/REFEs as needed

Later, if revisited:
    → New TASK: "Revisit decision on X"
    → New ADR written
    → Old ADR: status: superseded, superseded_by: [[new ADR]]
```

#### "Decide" TASKs Always Produce ADRs

When a TASK uses the verb "Decide" (or similar: "Determine", "Evaluate", "Choose"), its outcome is always an ADR:

```
TASK: "Decide on caching strategy"
    → ADR-0005: Caching Strategy Decision
        → spawns: TASK: "Implement Redis caching layer"
        → spawns: TASK: "Add cache invalidation logic"

TASK: "Determine GPU acceleration approach"
    → ADR-0006: GPU Acceleration Decision
        → spawns: TASK: "Create implementation plan for CoreML integration"
            → spawns: TASK: "Add CoreML execution provider"
            → spawns: TASK: "Add fallback logic for unsupported hardware"
```

This ensures all significant decisions are documented. The ADR is the artifact; the TASK is the work to produce it.

#### Immutability

ADRs are never edited to change the historical record. If new information emerges:
- Add a dated addendum at the bottom (preserves original context)
- Or create a new ADR that supersedes the old one

### REFE (Reference)

Reference docs are **evergreen encyclopedia entries**. They explain concepts, show pros/cons, and link to external resources. They contain no prescriptive assertions about what this project should do — that belongs in ADRs or TASKs.

**Required metadata:**
- `type: reference`
- `created`: date

**Optional metadata:**
- `topic`: category (e.g., "onnx", "tauri", "rust")
- `version`: if doc is version-specific
- `verified`: last confirmed accurate (for tracking currency)
- `tags`: list of cross-cutting tags

#### Reference Doc Character

- **Objective**: Explains what things ARE, not what we SHOULD do
- **Textbook-style**: Defines terms, explains algorithms, shows tradeoffs
- **Evergreen**: Should be kept current; use `verified` to track when reviewed
- **No project decisions**: Those belong in ADRs

Example topics for REFE docs:
- "What are ONNX execution providers and how do they work?"
- "Available smoothing algorithms: Chaikin, bilateral, active contours"
- "ONNX Runtime SessionOptions reference"

### RESO (Resource)

Resources are external material to be processed — articles, repos, videos, documentation.

**Required metadata:**
- `type: resource`
- `status`: `inbox` | `processing` | `processed`
- `url`: primary external URL
- `created`: date

**Optional metadata:**
- `source_type`: `repo` | `article` | `docs` | `video` | `tool`
- `processed`: date when fully processed
- `spawned_tasks`: list of tasks created from this
- `tags`: list of cross-cutting tags

#### Resource Document Structure

```markdown
# Resource Title

## Why Interesting
<!-- Your initial notes on why you're saving this -->

## Key Takeaways
<!-- Filled during processing — main points extracted -->

## Relevant to This Project
<!-- How it applies, what could be adopted -->

## TODOs
- [ ] Review X
- [ ] Extract Y

## Tasks Created
<!-- Links added as tasks are spawned -->
- [[TASK-0001_...]]
```

#### Resource Lifecycle

```
inbox → processing → processed (→ archive/)
```

1. **inbox** — Just added, needs review
2. **processing** — Actively extracting info, making decisions
3. **processed** — Done; tasks spawned, can be archived

### NOTE (Unrefined Thoughts)

Notes are the **"to be refined" inbox** — unprocessed thoughts that haven't been categorized yet. When processed, NOTEs **spawn** other artifacts; they are never converted or deleted.

**Required metadata:**
- `type: note`
- `status`: `inbox` | `processed`
- `created`: date

**Optional metadata:**
- `spawned`: list of spawned artifact links (when processed)
- `tags`: list of cross-cutting tags

#### Note Lifecycle

```
Raw thought → NOTE (status: inbox)
                │
                ├── Process the NOTE
                │     ├── spawns TASK(s) for actionable work
                │     ├── spawns ADR for decisions made
                │     ├── spawns REFE for domain knowledge extracted
                │     ├── spawns RESO for external material discovered
                │     └── (can spawn multiple artifacts of any combination)
                │
                └── Archive the NOTE (status: processed)
                      └── Move to archive/ with spawned: links
```

#### Key Principles

1. **NOTEs spawn, not convert** — The NOTE remains as the historical record of the original thought. Spawned artifacts are new documents that may reference back to the NOTE.

2. **Never delete NOTEs** — Even if a NOTE spawns nothing useful, archive it with `status: processed`. The thought process has value as historical context.

3. **One NOTE can spawn many** — A single NOTE might spawn 3 TASKs, 1 REFE, and an ADR. Or it might spawn nothing but still get archived.

4. **Archive after processing** — Once all useful artifacts have been spawned, update `status: processed`, add `spawned:` links, and move to `archive/`.

#### Processed NOTE Example

```yaml
---
type: note
status: processed
created: 2026-01-15
spawned:
  - "[[TASK-0012]]"
  - "[[TASK-0013]]"
  - "[[REFE-0005]]"
---

# Original Note Title

[Original content preserved...]
```

Notes are intentionally lightweight. Don't over-structure them — the point is to capture thoughts quickly and refine later.

## File Naming Convention

Files use a `TYPE-NNNN_description` format:

```
TYPE-NNNN_kebab-case-description.md
```

### Type Prefixes

| Prefix | Type |
|--------|------|
| `TASK` | Task |
| `EPIC` | Epic |
| `ADR` | Architecture Decision Record |
| `REFE` | Reference |
| `RESO` | Resource |
| `NOTE` | Note |

### ID Assignment

- IDs are 4-digit, zero-padded: `0001`, `0002`, etc.
- IDs are globally unique per type (not per directory)
- Archived files keep their original ID
- IDs provide stable references even if title changes

### Benefits

- Files sort by type, then by ID
- Type visible in file listings without opening
- Globally unique, easy to reference
- IDs remain stable even if description changes
- Grep-friendly for finding references

## Directory Organization

Suggested structure (adapt to your system):

```
board/
├── tasks/           # Actionable work items (TASK-*)
├── planning/        # Epics, ADRs, and notes (EPIC-*, ADR-*, NOTE-*)
├── reference/       # Evergreen knowledge base (REFE-*)
├── resources/       # External material inbox (RESO-*)
└── archive/         # Completed/processed items
```

| Type | Directory |
|------|-----------|
| TASK | `tasks/` |
| EPIC | `planning/` |
| ADR | `planning/` |
| NOTE | `planning/` |
| REFE | `reference/` |
| RESO | `resources/` |

**Never put:**
- Reference docs in `planning/` (they're evergreen, not plans)
- Epics in `tasks/` (they're not individually actionable)
- ADRs in `reference/` (they're project-specific history, not general knowledge)
- Completed items in active directories (archive them)

## Writing Guidelines

### Task Titles: Imperative Mood

Task titles MUST use imperative mood (action-oriented language). Start with a verb that describes what will be done.

| Bad (noun/passive) | Good (imperative) |
|-------------------|-------------------|
| `CoreML Execution Provider` | `Add CoreML acceleration for macOS` |
| `PNG Compression` | `Optimize PNG compression` |
| `GPU Performance Tuning` | `Benchmark GPU performance` |
| `Bug in Authentication` | `Fix authentication bug` |

The filename should match the title in kebab-case:
- Title: "Add CoreML acceleration for macOS"
- Filename: `TASK-0001_add-coreml-acceleration-for-macos.md`

### Reference Docs: Pure Reference Only

Reference documents (REFE) must contain only reference material:
- Technical specifications
- Configuration options
- API documentation
- External links and resources

**Reference docs must NOT contain:**
- Actionable items or TODOs
- Implementation steps
- Task lists or checklists
- Status tracking

If a reference doc has actionable items, extract them into separate TASK files.

### REFE vs ADR: Key Distinction

| REFE (Reference) | ADR (Decision Record) |
|------------------|----------------------|
| What things ARE | What WE DID/DECIDED |
| Objective, encyclopedic | Subjective to this project |
| Evergreen, keep current | Immutable, never edited |
| No project decisions | Documents our choices |

## Archiving

When a task is `done` or resource is `processed`:

1. Update `status` field
2. Move file to `archive/` subdirectory
3. Queries automatically exclude archived items (different path)

Archived items remain searchable and linkable.

## Validation

Required fields by type:

| Type | Required Fields |
|------|-----------------|
| task | type, status, created |
| epic | type, status, created |
| adr | type, status, context_date, created (spawned items in body) |
| reference | type, created |
| resource | type, status, url, created |
| note | type, status, created (spawned when processed) |

---

# Part 2: Implementation

This section covers tooling-specific implementation details for Obsidian, REST API access, and Claude Code integration.

## Directory Structure

```
board/
├── tasks/           # Actionable work items (TASK-*)
├── planning/        # Epics, ADRs, and notes (EPIC-*, ADR-*, NOTE-*)
├── reference/       # Evergreen knowledge base (REFE-*)
├── resources/       # External material inbox (RESO-*)
└── archive/         # Completed/processed items
```

## Obsidian Integration

### Vault Setup (Symlink Approach)

Project docs live in the repo but appear in your main Obsidian vault via symlink:

```bash
# From your main vault directory
ln -s /path/to/project/board ./projects/project-name
```

**Benefits:**
- Docs are git-tracked in the project repo
- Searchable and linkable from main vault
- Can link between project docs and personal notes
- Single Obsidian window, no vault switching

**Structure in vault:**
```
your-vault/
├── personal/
├── work/
└── projects/
    └── my-project/    # ← symlink to project/board/
        ├── tasks/
        ├── reference/
        └── ...
```

### Dataview vs Bases

This schema works with both:

**Dataview** — Query-based, more powerful, requires learning DQL
```dataview
TABLE status, priority FROM "projects/my-project/tasks"
WHERE status != "done"
SORT priority ASC
```

**Bases** — GUI-based, easier setup, native Obsidian feature (v1.5+)
- Create a Base, point it at `projects/my-project/tasks/`
- Frontmatter properties auto-detected
- Drag-and-drop kanban, table views, filters

Recommendation: Start with Bases for simplicity, use Dataview for complex queries.

### Recommended Plugins

| Plugin | Purpose |
|--------|---------|
| Dataview | Powerful queries and dynamic views |
| Templater | Templates for new TASK/RESO/etc files |
| Linter | Validate frontmatter on save |
| Local REST API | Programmatic access from external tools |

### Example Dataview Queries

Adjust paths based on your vault structure (e.g., `projects/my-project/` if symlinked).

**Task Kanban:**
```dataview
TABLE WITHOUT ID
  file.link as Task,
  status,
  priority,
  due
FROM "board/tasks"
WHERE type = "task"
SORT choice(status = "current", 0, choice(status = "backlog", 1, 2)) ASC, priority ASC
```

**Resource Inbox:**
```dataview
TABLE WITHOUT ID
  file.link as Resource,
  source_type,
  created
FROM "board/resources"
WHERE status = "inbox" OR status = "processing"
SORT created DESC
```

**Recently Updated:**
```dataview
TABLE WITHOUT ID
  file.link as Item,
  type,
  updated
FROM "board"
WHERE updated
SORT updated DESC
LIMIT 10
```

**Unblocked Backlog Tasks:**
```dataview
TABLE WITHOUT ID
  file.link as Task,
  priority
FROM "board/tasks"
WHERE status = "backlog"
  AND (!blocked_by OR length(blocked_by) = 0)
SORT priority ASC
```

### Templates

Create templates in your vault for each doc type:

**Template: TASK**
```markdown
---
type: task
status: backlog
priority: 2
tags: []
created: {{date:YYYY-MM-DD}}
updated: {{date:YYYY-MM-DD}}
due:
blocked_by: []
parent:
---

# {{title}}

## Description

## Acceptance Criteria

## Notes
```

**Template: RESO**
```markdown
---
type: resource
status: inbox
url:
source_type:
tags: []
created: {{date:YYYY-MM-DD}}
processed:
spawned_tasks: []
---

# {{title}}

## Why Interesting

## Key Takeaways

## Relevant to This Project

## TODOs
- [ ]

## Tasks Created
```

## Claude Code Workflow Guidelines

### Use Plan Mode for Significant Work

When working on tasks that involve:
- **Architectural changes** (new modules, restructuring)
- **Multi-file refactoring**
- **New features requiring design decisions**
- **Complex implementations** spanning multiple components

Claude Code SHOULD enter plan mode (`EnterPlanMode` tool) to:
1. Thoroughly explore the codebase using Explore agents
2. Understand existing patterns and dependencies
3. Design an informed implementation approach
4. Present the plan for user approval before executing

### When Plan Mode is NOT Needed

Skip plan mode for:
- Simple bug fixes with obvious solutions
- Single-file changes
- Documentation updates
- Small, well-defined tasks

### Task Planning

When creating TASKs that describe significant work:
- Use plan mode to analyze the codebase BEFORE writing detailed implementation steps
- Ground the task details in actual code analysis, not assumptions
- Reference specific files, line numbers, and functions

---

## Programmatic Access

This system is designed for human-AI collaboration where Claude Code performs much of the actual work. Efficient programmatic access is essential.

### Obsidian Local REST API

The [Local REST API plugin](https://github.com/coddingtonbear/obsidian-local-rest-api) provides HTTP access to vault contents AND Dataview query execution.

**Configuration:**
```
~/.config/obsidian/config

PROJECTNAME_OBSIDIAN_API_KEY=your-api-key
PROJECTNAME_OBSIDIAN_API_URL=http://127.0.0.1:27123
```

### Dataview Queries via REST API

The REST API supports executing Dataview DQL queries — this is the bridge between plaintext markdown and database-like query capabilities.

**Execute a Dataview query:**
```bash
curl -X POST \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/vnd.olrapi.dataview.dql+txt" \
     "http://127.0.0.1:27123/search/" \
     -d 'TABLE status, priority, blocked_by FROM "board/tasks" WHERE status = "backlog"'
```

**How it works:**
```
Plaintext Markdown → Dataview Index → REST API → Structured Query Results
                         ↑
                    (in-memory database)
```

Dataview builds an index of all markdown files and frontmatter. The REST API exposes that index via DQL queries, giving us:
- Structured queries (`WHERE status = "backlog"`)
- Frontmatter as queryable fields
- Single API call for complex filters
- No need to read files individually

### Individual File Access

For reading a single file with structured frontmatter:

```bash
curl -H "Accept: application/vnd.olrapi.note+json" \
     -H "Authorization: Bearer $TOKEN" \
     "http://127.0.0.1:27123/vault/tasks/TASK-0002.md"
```

Returns:
```json
{
  "frontmatter": {
    "type": "task",
    "status": "backlog",
    "priority": 2,
    "blocked_by": ["[[TASK-0001]]"],
    "parent": "[[EPIC-0001]]"
  },
  "content": "...",
  "tags": [...]
}
```

### Query Strategy

| Need | Approach |
|------|----------|
| All backlog tasks | Dataview query via `/search/` |
| Unblocked tasks only | Dataview query with `WHERE length(blocked_by) = 0` |
| Single task details | GET file with JSON accept header |
| Check blocker status | GET each blocker file, check `status` field |

### Fallback: Direct File Reads

If Obsidian isn't running, read task files directly from `board/tasks/`. YAML frontmatter is simple to parse:

```yaml
---
type: task
status: backlog
blocked_by: ["[[TASK-0001]]"]
---
```

The REST API with Dataview is preferred (single query for multiple files), but direct file access works as a fallback.

## ID Tracking

To assign the next available ID, either:

1. **Manual** — Check highest existing ID in that type's directory
2. **Script** — `./scripts/next-doc-id.sh TASK` outputs next available
3. **Templater** — Advanced: script that auto-increments on file creation

For now, manual is fine. A tracking file could be added:

```
board/.doc-ids
TASK=3
REFE=2
RESO=2
NOTE=1
```

## Migration Path

To migrate existing docs:

1. Add frontmatter to existing files
2. Rename with TYPE-NNNN prefix
3. Move to appropriate directory
4. Update any internal links
5. Set up vault symlink
