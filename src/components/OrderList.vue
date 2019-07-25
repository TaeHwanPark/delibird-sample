<template>
  <b-card class="xl-4" no-body>
    <b-card-body class="p-4 text-center" v-if="isLoading">
      <b-spinner label="Spinning" variant="primary"/>
    </b-card-body>
    <b-card-body class="p-4" v-else>
      <common-language></common-language>


      <!-- order list -->
      <b-table :fields="orderListFields" :items="orderList" responsive small>
        <!-- sku -->
        <template slot="title" slot-scope="data">
          <p :key="index"
             v-for="(orderItem, index) in data.item.order_items"
             v-text="orderItem.title"></p>
        </template>
        <!--//sku-->


        <!-- sku -->
        <template slot="sku" slot-scope="data">
          <p :key="index"
             v-for="(orderItem, index) in data.item.order_items"
             v-text="orderItem.sku"></p>
        </template>
        <!--//sku-->
      </b-table>
    </b-card-body>
  </b-card>
</template>

<script>
  import orderApi from '../common/OrdermanApi'

  export default {
    name: "OrderList",
    props: [
      'sellerId',
    ],
    data() {
      return {
        isLoading: true,
        orderList: []
      }
    },
    mounted() {
      orderApi()
          .getOrderList(this.sellerId, "")
          .then(response => {
            this.orderList = response;
            this.isLoading = false
          })
    },
    computed: {
      orderListFields() {
        return [
            {key: 'order_id', label: this.$t('message.order_id')},
            {key: 'order_number', label: this.$t('message.order_number')},
            {key: 'title', label: this.$t('message.title')},
            {key: 'sku', label: this.$t('message.sku')},
            {key: 'ordered_at', label: this.$t('message.ordered_at')}
        ]
      }
    }
  }
</script>

<style scoped>

</style>