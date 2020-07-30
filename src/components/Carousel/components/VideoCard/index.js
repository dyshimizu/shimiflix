import React from 'react'
import { VideoCardContainer } from './styles'

import { getYouTubeId } from '../../../../commun/commun'

export default function VideoCard ({
    videoTitle,
    videoURL, 
    categoryColor
}) {
    const image = `http://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`
    return(
        <VideoCardContainer
            url={image}
            href={videoURL}
            target="_blank"
            style={{ borderColor: categoryColor || 'red'}}
            title={videoTitle}
        />
    )
}