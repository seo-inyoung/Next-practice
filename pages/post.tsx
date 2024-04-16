interface postInfo {
    id: number;
    title: string;
    content: string;
}

const tmpPostList: postInfo[] = [
    {
        id: 1,
        title: 'ABC',
        content: 'sldkfjsdlkfjsldkfjslkfjslkj'
    },
    {
        id: 2,
        title: 'DEF',
        content: 'asldkjflksdjflksjdfklsjlkdsf'
    },
    {
        id: 3,
        title: 'GHI',
        content: 'qwoeiruqwoeiruqwoeiruqwoeiru'
    }
]

export default function PostPage() {
    return (
        <div>
            {tmpPostList.map(tmpPost => <>
            <div>{tmpPost.title}</div>
            </>)}
        </div>
    )
}