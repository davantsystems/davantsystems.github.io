---
type: reference
created: 2026-01-23
---
# Docs System Quick Reference

> See `REFE-0001_docs-system-spec.md` for full specification.

## File Naming

```
TYPE-NNNN_kebab-case-description.md
```

| Prefix | Type |
|--------|------|
| `TASK` | Task |
| `EPIC` | Epic |
| `ADR` | Architecture Decision Record |
| `REFE` | Reference |
| `RESO` | Resource |
| `NOTE` | Note |

## Document Types

| Type | Status Values | Description |
|------|---------------|-------------|
| `task` | `backlog` → `current` → `done` | Actionable work item |
| `epic` | `planning` → `current` → `done` | Container for related tasks |
| `adr` | `active` \| `superseded` \| `deprecated` | Decision record, written after decision made |
| `resource` | `inbox` → `processing` → `processed` | External material to review |
| `reference` | _(none)_ | Evergreen knowledge base (encyclopedic) |
| `note` | _(none)_ | Unrefined thoughts (to be categorized) |

## Priority (Tasks)

| Value | Meaning |
|-------|---------|
| `1` | High |
| `2` | Medium |
| `3` | Low |

## Required Frontmatter

**Task:**
```yaml
---
type: task
status: backlog
priority: 2
created: 2026-01-23
---
```

**Resource:**
```yaml
---
type: resource
status: inbox
url: https://example.com
created: 2026-01-23
---
```

**Reference/Note:**
```yaml
---
type: reference
created: 2026-01-23
---
```

## Directory Structure

```
board/
├── tasks/       # TASK-* files
├── planning/    # EPIC-*, NOTE-* files
├── reference/   # REFE-* files
├── resources/   # RESO-* files
└── archive/     # Completed items
```

## Writing Rules

### Task Titles: Use Imperative Mood

Start with a verb. Describe the action to be done.

| Bad | Good |
|-----|------|
| CoreML Execution Provider | Add CoreML acceleration for macOS |
| PNG Compression | Optimize PNG compression |
| Bug in Login | Fix login authentication bug |

### REFE vs ADR: Key Distinction

| REFE (Reference) | ADR (Decision Record) |
|------------------|----------------------|
| What things ARE | What WE DID/DECIDED |
| Objective, encyclopedic | Subjective to this project |
| Evergreen, keep current | Immutable, never edited |
| No project decisions | Documents our choices |

### Epics vs Tasks

- **Epic**: Container for related tasks (lives in `planning/`)
- **Task**: Single, completable unit of work (lives in `tasks/`)

If it can't be done in one focused effort, split it into tasks.

### NOTE Lifecycle

NOTE = "To be refined" inbox. May become:
- TASK (if actionable)
- ADR (if decision/exploration)
- REFE (if domain knowledge)
- Or stay NOTE / be deleted

## ADR Structure

```markdown
# ADR-NNNN: Title

## Context
What problem were we solving?

## Considered Approaches
What we tried/evaluated and what happened.

## Decision
What we decided and why.

## Consequences
Effects and trade-offs of this decision.

## Spawned Items
- [[TASK-...]] or [[REFE-...]] created
- Or: "No follow-up needed"
```

**Key rules:**
- ADRs are written AFTER decisions, not during
- "Decide X" TASK → always produces ADR as outcome
- ADRs spawn TASKs and REFEs, never NOTEs
- Status is validity (active/superseded/deprecated), not workflow

**Decision chain:**
```
TASK: "Decide on X" → ADR → TASK(s) for implementation
```

## Task Dependencies

```yaml
blocked_by: ["[[TASK-0001]]", "[[TASK-0003]]"]
```

- `blocked_by` is **informational** (documents dependency)
- Status stays `backlog` (no separate "blocked" status)
- "Actionable" is **derived** (computed), not stored
- Task is actionable when: `blocked_by` is empty OR all blockers are `done`

## Claude Code Access

### Dataview Queries (Preferred)

Execute DQL queries via REST API - single call for multiple files:

```bash
curl -X POST \
     -H "Authorization: Bearer $TOKEN" \
     -H "Content-Type: application/vnd.olrapi.dataview.dql+txt" \
     "http://127.0.0.1:27123/search/" \
     -d 'TABLE status, priority FROM "board/tasks" WHERE status = "backlog"'
```

**Common queries:**
- All backlog tasks: `WHERE status = "backlog"`
- Unblocked only: `WHERE status = "backlog" AND length(blocked_by) = 0`
- By epic: `WHERE contains(parent, "EPIC-0001")`

### Individual File Access

Get single file with frontmatter as JSON:

```bash
curl -H "Accept: application/vnd.olrapi.note+json" \
     -H "Authorization: Bearer $TOKEN" \
     "http://127.0.0.1:27123/vault/tasks/TASK-0002.md"
```

Returns structured `frontmatter` object - no YAML parsing needed.
