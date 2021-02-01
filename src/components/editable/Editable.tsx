import * as React from 'react';
import { ReactElement } from 'react';


/**
 * @property {string} title  表格标题
 * @property {string} value  表格的值
 * @property {ReactElement} render 如果存在则使用改jsx react元素渲染当前单元格
 * @property {string} key    列表key值，
 */
export interface ColumnsAttr{
    title: string,
    value: string,
    render?: Function,
    key?: string
}

/**
 * @property {Array<any>} dataSource: 数组数据
 * @property {Array<any>} columns: 表头定义
 */
interface Props{
    dataSource: Array<any>,
    columns:  ColumnsAttr[],
}

/**
 * 根据设置的表头设置，合并源数据
 * @param {[]} dataSource 表格源数据
 * @param {Columns[]} columns 表头列表
 */
const _mergedataSourceAndColumns = (dataSource:[], columns: ColumnsAttr[]): [] => {
    
    return []
}


const Editable: React.FunctionComponent<Props> = (props: Props): ReactElement=>{
    const { dataSource=[], columns=[] } = props;

    return (
        <table>
            <thead>
                <tr>
                    {
                        columns.map(({title, value, key=null, render=null}, c_i)=>{
                            return (
                                <th key={key}>    
                                    {title}
                                </th>
                            )
                        }) 
                    }
                </tr>
            </thead>
            <tbody>
                {
                    dataSource.map((v, row_id)=>{
                        return <tr key={row_id}>
                            {
                                columns.map(({title, value, key=null, render=null}, c_i)=>{
                                    return (
                                        <td key={key}>    
                                            {render ? render(v): v[value]}
                                        </td>
                                    )
                                }) 
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}


export default Editable





