import React from 'react'
import { Prompt } from 'react-router-dom'
const Doc = () => {
    const docs = [
        {
            h1: 1,
            id: 'title1',
            content: '这是内容4这是内容4'
        },
        {
            h1: 2,
            id: 'title2',
            content: '这是内容4这是内容4'
        },
        {
            h1: 1,
            id: 'title3',
            content: '这是内容3这是内容3'
        },
        {
            h1: 3,
            id: 'title4',
            content: '这是内容4这是内容4'
        }
    ]
    const dealWithDocs = list => {
        let titleList = []
        list.forEach(item => {
            if(!titleList.includes(item.h1)){
                titleList.push(item.h1)
            }
        })
        console.log('titleList: ', titleList);
        let itemList = titleList.map(item => ({title: item, list: []}))
        list.forEach(item => {
            itemList.forEach((subItem, index) => {
                if(item.h1 === subItem.title){
                    itemList[index].list.push(item)
                }
            })
        })
        console.log('itemList: ', itemList);
        return itemList
    }
    return (
        <div>
            <Prompt when={true} message={'11111'} />
            {JSON.stringify(dealWithDocs(docs))}
        </div>
    )
}

export default Doc;