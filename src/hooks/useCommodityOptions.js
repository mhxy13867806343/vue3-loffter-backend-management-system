
export default (options)=>{
  const {type,id} = options;
  const ruleFormRef = ref(null)
  const ruleForm=reactive({
    fileList: [],//商品图片
    name: '',//商品名称
    number: '',//商品编号
    imageUrl: '',//商品图片
     optionsFist : [
      {
        value: 'guide',
        label: 'Guide',
      },
      {
        value: 'component',
        label: 'Component',
      },
    ],
    optionFist:'',
    optionsLast : [
      {
        value: 'guide',
        label: 'Guide',
      },
      {
        value: 'component',
        label: 'Component',
      },
    ],
    optionLast:'',
  })
  const validateImageUrl=(rule, value, callback)=> {
    if ( !ruleForm.fileList.length ) {
      callback ( new Error ( '请上传图片' ) )
    } else {
    
    }
  }
  const rulesForm = reactive({
    name:[
      { required: true, message: '商品名称不能为空', trigger: 'blur' },
    ],
    number:{},
    imageUrl:{
      validator: validateImageUrl, trigger: 'blur'
    },
    optionFist:[
      { required: true, message: '商品分类不能为空', trigger: 'change' },
    ],
    optionLast:[
      { required: true, message: '商品分类不能为空', trigger: 'change' },
    ],
  })
 
  const handleAvatarSuccess = ( response,
                                uploadFile) => {}
  const beforeAvatarUpload = (rawFile) => {}
  const submitForm = (res) => {}
  const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
  }
  return {
    ruleForm,
    rulesForm,
    handleAvatarSuccess,beforeAvatarUpload,
    submitForm,resetForm,
    ruleFormRef
  }
}
