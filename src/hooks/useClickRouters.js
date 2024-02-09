export default ()=>{
  const router = useRouter();
  const onClickRouter=(path,type='add',target="_blank")=>{
    const newPageUrl =router.resolve({
      path
    }).href;
    console.log(newPageUrl,path,222);
    window.open(newPageUrl+'?type='+type, target);
  }
  return {
    onClickRouter
  };
}
