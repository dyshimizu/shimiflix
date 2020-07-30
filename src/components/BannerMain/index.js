import React from 'react'
import VideoIframeResponsive from './components/VideoIframeResponsive'
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles'

import { getYouTubeId }from '../../commun/commun'

export default function BannerMain({
    videoTitle,
    videoDescription,
    url
}) {
    const youtubeID = getYouTubeId(url)
    const bgUrl = `https://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`
    return (
        <BannerMainContainer backgroundImage={bgUrl}>
            <ContentAreaContainer>
                <ContentAreaContainer.Item>
                    <ContentAreaContainer.Title>
                        {videoTitle}
                    </ContentAreaContainer.Title>

                    <ContentAreaContainer.Description>
                        {videoDescription}
                    </ContentAreaContainer.Description>
                </ContentAreaContainer.Item>

                <ContentAreaContainer.Item>
                    <VideoIframeResponsive
                        youtubeID={youtubeID}
                    />
                    <WatchButton>
                        Assistir
                    </WatchButton>
                </ContentAreaContainer.Item>
            </ContentAreaContainer>
        </BannerMainContainer>
    )
}