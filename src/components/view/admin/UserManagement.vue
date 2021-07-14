<template>
  <!--  <div>用户管理列表</div>-->
  <!--  -->
  <div id="userMainManagent">
    <el-table
      :data="this.tableData.slice((this.currentPage - 1) * pageSize, this.currentPage * pageSize)"
      stripe
      style="width: 100%">
      <el-table-column
        prop="sname"
        label="名字"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ssex"
        label="性别"
        width="150">
      </el-table-column>
      <el-table-column
        prop="sage"
        label="年龄"
        width="150">
      </el-table-column>
      <el-table-column
        prop="studentid"
        label="学生ID"
        width="150">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="total, sizes, prev, pager, next"
      @size-change="changePageSize"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10,15]"
      :total="tableData.length"
      :page-size="pageSize"
    >
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "UserManagement",
    data() {
      return {
        tableData: [],
        currentPage: 1,
        pageSize: 5,
      }
    },
    //正常应该是点击页码才能进行后台请求数据
    beforeMount() {

    },
    mounted() {
      this.$axios.post("/studentServlet").then(response => {
        this.tableData = response.data;
        // console.log(response.data);
      }).catch(error => {
        console.log('error');
      })
    },
    methods: {
      changePageSize(val) {
        this.pageSize = val;
        // this.pageSize
        console.log(this.pageSize)
      },
      handleCurrentChange(cPage) {
        this.currentPage = cPage;
        console.log(cPage);
      },
      handleEdit() {

      }
    },

  }
</script>

<style scoped>
  #userMainManagent {
  }
</style>
