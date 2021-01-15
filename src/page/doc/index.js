import React from 'react'
import { Prompt } from 'react-router-dom'
const Doc = () => {
    const docs = [
        {
            h1: '标题1',
            id: 'title1',
            content: '这是内容4这是内容4'
        },
        {
            h1: '标题2',
            id: 'title2',
            content: '这是内容4这是内容4'
        },
        {
            h1: '标题3',
            id: 'title3',
            content: '这是内容3这是内容3'
        },
        {
            h1: '标题4',
            id: 'title4',
            content: '这是内容4这是内容4'
        }
    ]
    return (
        <div>
            <Prompt when={true} message={'11111'} />
            {
                docs.map(({h1, id, content}) => (
                    <div>
                        <h1 id={id}>{h1}</h1>
                        {content.split('').map(item => <p>{item}</p>)}
                    </div>
                ))
            }
        </div>
    )
}

export default Doc;