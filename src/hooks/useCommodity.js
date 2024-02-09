import { ElMessage } from 'element-plus'
export default ()=>{
  const search=ref('') //搜索关键字
  const searchList=ref([]) //搜索结果
  //清空搜索
  const onClearSearch=()=>{
    search.value=''
    searchList.value=[]
  }
  //点击搜索或者回车搜索
  const onClickSearch=()=>{
    if (!search.value.length) {
      ElMessage.warning('请输入搜索关键字')
      return
    }
    searchList.value=[]
  }
  return {
    search,
    searchList,
    onClearSearch,
    onClickSearch
  }
}
