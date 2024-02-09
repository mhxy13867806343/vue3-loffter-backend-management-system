<script setup>
const route = useRoute()
import useCommodityOptions from '@/hooks/useCommodityOptions'
const { ruleForm,ruleFormRef,
  rulesForm,handleAvatarSuccess,beforeAvatarUpload,submitForm,resetForm}=useCommodityOptions({
  type:route.query.type,id:''
})
</script>

<template>
  <div class="app-container">
    <div class="app-container-header">
  <el-form
    inline-message
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rulesForm"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="商品名称" prop="name" required style="width:300px" inline-message>
      <el-input v-model="ruleForm.name" type="text" clearable maxlength="12" placeholder="请输入商品名称(限12个字符内)" />
    </el-form-item>
    <el-form-item label="商品编号" prop="number" required style="width:300px" inline-message>
      <el-input
        v-model="ruleForm.number"
        type="text"
        placeholder="商品编号"
        disabled
      />
    </el-form-item>
    <el-form-item label="商品类型" prop="optionFist" required inline-message >
      <el-select
        v-model="ruleForm.optionFist"
        class="m-2"
        placeholder="请选择商品类型"
        size="large"
        clearable
        style="width: 240px"
      >
        <el-option
          v-for="item in ruleForm.optionsFist"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="商品类型" prop="optionLast" :required="ruleForm.optionFist.length>0"
    v-if="ruleForm.optionFist"
                  inline-message>
      <el-select
        v-model="ruleForm.optionLast"
        class="m-2"
        placeholder="请选择子商品类型"
        size="large"
        clearable
        style="width: 240px"
      >
        <el-option
          v-for="item in ruleForm.optionsLast"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="商品图片" prop="imageUrl" required inline-message>
      <el-upload
        class="avatar-uploader"
        show-file-list
        :limit="1"
        v-model:file-list="ruleForm.fileList"
        drag
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
      >提交</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
    </div>
  </div>
</template>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
