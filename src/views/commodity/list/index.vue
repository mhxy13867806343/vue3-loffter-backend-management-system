<script setup>
import useCommodity from '@/hooks/useCommodity'
const {search,  onClearSearch,searchList,
  onClickSearch}= useCommodity()
import useClickRouters from '@/hooks/useClickRouters'
const {onClickRouter}= useClickRouters()
const handleEdit = (index ,row) => {
  console.log(index, row)
}
const handleDelete = (index,row) => {
  console.log(index, row)
}

const tableData= [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<template>
  <div class="app-container">
    <div class="app-container-header">
      <el-row :gutter="20">
        <el-col :span="8">
          
          <el-input
            v-model="search"
            clearable
            placeholder="搜索想要的商品(限12个字符内)"
            maxlength="12"
            class="input-with-select"
            @keyup.enter="onClickSearch"
          >
            <template #append>
              <el-button icon="Search"  @click="onClickSearch"/>
            </template>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button  icon="Edit" type="primary"
          @click="onClickRouter('/commodity/commodity/created','add')"
          >新增商品</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" style="width: 100%"  fixed>
      <el-table-column type="index"  label="序号"  width="100"/>
      <el-table-column label="商品编号">
        <template #default="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="商品名称">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #default>
              <div>name: {{ scope.row.name }}</div>
              <div>address: {{ scope.row.address }}</div>
            </template>
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="商品类型">
        <template #default="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>
      <el-table-column label="商品图片"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="warning" icon="Edit" size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            icon="Delete"
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-divider class="app-container-divider">当前页共{{ searchList.length }}条数据</el-divider>
  </div>
  
</template>
