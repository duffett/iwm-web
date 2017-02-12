<template>
  <div class="hello">
    <h1>Welcome to IWM</h1>
    <label for="invoice-number">Invoice #: </label>
    <input v-model="invoiceNumber" name="invoice-number" placeholder="edit me">
    <button @click="getInvoiceData">Get Data</button>
    <p>{{message}}</p>
    <h2>IWM Links</h2>
    <li><a href="http://qb.iwminc.com/" target="_blank">QuickBooks</a></li>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() { // eslint-disable-line space-before-function-paren
      return {
        message: '',
        invoiceNumber: null
      }
    },
    methods: {
      getInvoiceData: function (message, event) {
        // now we have access to the native event
        if (event) {
          event.preventDefault()
        }
        if (!this.invoiceNumber) {
          this.message = 'please provide an invoice number'
        } else {
          this.message = 'retrieve data for invoice ' + this.invoiceNumber
        }
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }

</style>
