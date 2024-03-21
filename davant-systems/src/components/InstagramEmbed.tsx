import React from 'react';

function InstagramEmbed() {
    return (
        <>
            <script async src="https://www.instagram.com/embed.js"></script>
            <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/davantsystems/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                    background: 'black',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: 1,
                    maxWidth: 540,
                    minWidth: 326,
                    padding: 0,
                    // width: '99.375%',
                    // width: '-webkit-calc(100% - 2px)',
                    // width: 'calc(100% - 2px)',
                }}
            >
                <div style={{ padding: 16 }}>
                    <a
                        href="https://www.instagram.com/davantsystems/?utm_source=ig_embed&utm_campaign=loading"
                        style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* Content trimmed for brevity */}
                    </a>
                    <p
                        style={{
                            color: '#c9c8cd',
                            fontFamily: 'Arial,sans-serif',
                            fontSize: 14,
                            lineHeight: '17px',
                            marginBottom: 0,
                            marginTop: 8,
                            overflow: 'hidden',
                            padding: '8px 0 7px',
                            textAlign: 'center',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <a
                            href="https://www.instagram.com/davantsystems/?utm_source=ig_embed&utm_campaign=loading"
                            style={{
                                color: '#c9c8cd',
                                fontFamily: 'Arial,sans-serif',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                lineHeight: '17px',
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Davant Systemsss
                        </a>{' '}
                        (@
                        <a
                            href="https://www.instagram.com/davantsystems/?utm_source=ig_embed&utm_campaign=loading"
                            style={{
                                color: '#c9c8cd',
                                fontFamily: 'Arial,sans-serif',
                                fontSize: 14,
                                fontStyle: 'normal',
                                fontWeight: 'normal',
                                lineHeight: '17px',
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            davantsystems
                        </a>
                        ) • Instagram photos and videos
                    </p>
                </div>
            </blockquote>
        </>
    );
}

export default InstagramEmbed;
