var app = new Vue({
  el: '#app',
  data: {
    books: [],
    message: 'Hello World',
    itemLists: [],
    itemCount: 0,
    carts: [],
    total: 0,
    dataCustomer: {
      username: '',
      password: ''
    },
    dataLogin: {
      username: '',
      password: ''
    },
  },
  methods: {
    addToChart: function(book) {
      // transactions obj
      let transactions = {
        itemId: book._id,
        itemName: book.title,
        price: book.price,
        quantity: 1,
        subTotal: book.price
      }

      // check index
      let uniqueIndex = this.carts.findIndex(el => {
        return el.itemId === book._id
      })

      // conditional for add to chart
      if(this.carts.length == 0) {
        this.carts.push(transactions)
      } else {
        if(uniqueIndex === -1) {
          this.carts.push(transactions)
        } else {
          // get subtotal price
          this.carts[uniqueIndex].quantity++
          this.carts[uniqueIndex].subTotal = this.carts[uniqueIndex].price * this.carts[uniqueIndex].quantity
        }
      }

      // cart counter
      this.itemCount++

      // get total price
      let total = 0
      this.carts.forEach(cart => {
        total += cart.subTotal
      })
      this.total = total
    },
    checkOut: function() {
      let objTransactions = []

      // loop for insert data transaction in array objTransactions
      this.carts.forEach(cart => {
        objTransactions.push({
          _id: cart.itemId,
          quantity: cart.quantity
        })
      })

      axios.post('http://localhost:3000/api/transactions', {objTransactions})
      .then(response => console.log(response))
      .catch(err => console.log(err))
    },
    register: function() {
      let customer = this.dataCustomer

      axios.post('http://localhost:3000/api/customers', {customer})
      .then(response => {
        console.log(response)
        alert('Register success. Please login to continue!')
      })
      .catch(err => {
        console.log(err)
        alert('Register failed!')
      })
    },
    login: function() {
      console.log(this.dataLogin);

      // axios.post('http://localhost:3000/api/customers', {customer})
      // .then(response => {
      //   console.log(response)
      //   alert('Register success. Please login to continue!')
      // })
      // .catch(err => {
      //   console.log(err)
      //   alert('Register failed!')
      // })
    }
  },
  created: function() {
    axios.get('http://localhost:3000/api/books')
    .then(response => this.books = response.data)
    .catch(err => console.log(err))
  },
})
