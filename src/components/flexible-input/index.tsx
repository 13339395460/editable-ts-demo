import * as React from 'react'
import {ReactElement, useState, useRef, useEffect} from 'react'



/**
 * @property {String} value 数据框的值，来自外部
 */
interface Props{
    value: string,
    onChange?: (v:string)=>void,
}

/**
 * 可以编辑的输入框
 * 正常情况只显示输入框的值（不展示数据框元素），当点击元素时，展示输入框(焦点在输入框内)，回车恢复显示值的状态
 * 
 * @param props 
 */
const FlexibleInput: React.FunctionComponent<Props> = (props): ReactElement => {

    // 是否是编辑状态0不是，1是
    const [editStatus, setEditStatus] = useState(0);

    const inputRef = useRef(null);
    const { value, onChange} = props;

    /**
     * 挂在ref到input
     */
    useEffect(()=>{
        if(editStatus === 1){
            inputRef.current.focus();
        }
    })



    /**
     * 展示输入框
     */
    const showInput = ():void => {
        setEditStatus(1);
        inputRef.current.focus();
    }
    /** 
     * 监听回车事件
     */
    const enterPress = (e: any):void => {
        if(e.keyCode === 13) {
            setEditStatus(0);
            inputRef.current.blur();
        }
    }

    return <div>
        {editStatus === 0? 
        (<div onClick={()=>{showInput()}}>{value}</div>): 
        <input type="text" 
                ref={inputRef} 
                value={value} 
                onChange={(e)=>{onChange(e.target.value)}}
                onKeyDown={(e)=>{enterPress(e)}}
                onBlur={()=>{setEditStatus(0);}}
                /> }
    </div>
}


export default FlexibleInput