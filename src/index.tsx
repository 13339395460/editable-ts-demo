import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState, ReactElement, useEffect } from 'react';
import Editable, {ColumnsAttr} from './components/editable/Editable';


const EditablePage = (props: any): ReactElement => {

    const [dataSource, setDataSource]  = useState([]);

    useEffect(()=>{
        setDataSource([{
            id: "1",
            sex: "1",
            name: "小红",
            age: 19,
        }])
    }, [])

    /**
     * 修改数据源
     * @param rowId  行ID
     * @param key    对应的key值
     * @param value  新的值
     */
    const changeDataSource = (rowId: number, key: string, value: string): void => {
        dataSource[rowId][key] = value
        setDataSource(JSON.parse(JSON.stringify(dataSource)))
    }

    const columns: ColumnsAttr[] = [
        {
            "title": "姓名",
            "value": "name",
            "key": "1",
        },
        {
            "title": "年龄",
            "value": "age",
            "key": "2",
        },
        {
            "title": "性别",
            "value": "",
            "render": (v: any)=>{return <div>{String(v.sex) === "1"? "男": "女"}</div>} ,
            "key": "3",
        }

    ]

    return (
        <div>
            <Editable dataSource={dataSource} columns={columns} changeDataSource={changeDataSource} />
        </div>
    )
}


ReactDOM.render(<EditablePage />, document.getElementById("root"))