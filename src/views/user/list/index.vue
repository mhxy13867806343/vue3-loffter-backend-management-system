<script setup>
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
      <el-table :data="tableData" style="width: 100%"  fixed>
        <el-table-column type="index"  label="序号"  width="100"/>
        <el-table-column label="用户名">
          <template #default="scope">
            {{ scope.row.date }}
          </template>
        </el-table-column>
        <el-table-column label="创建时间">
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
        <el-table-column label="用户类型">
          <template #default="scope">
            {{ scope.row.date }}
          </template>
        </el-table-column>
        <el-table-column label="手机号码">
          <template #default="scope">
            {{ scope.row.date }}
          </template>
        </el-table-column>
        <el-table-column label="抽奖次数">
          <template #default="scope">
            {{ scope.row.date }}
          </template>
        </el-table-column>
        <el-table-column label="奖品内容">
          <template #default="scope">
            {{ scope.row.date }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped>

</style>
