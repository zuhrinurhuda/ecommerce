var app = new Vue({
  el: '#app',
  data: {
    books: [],
    message: 'Hello World',
    itemLists: [],
    itemCount: 0,
    carts: [],
    total: 0,
    customer: {
      name: '',
      username: '',
      password: '',
      address: '',
      zipcode: '',
      phone: ''
    }
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

      // console.log(this.carts);
    },
    checkOut: function() {
      let objTransactions = []
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
      let customer = this.customer
      // console.log(customer);
      axios.post('http://localhost:3000/api/customers', {customer})
      .then(response => console.log(response))
      .catch(err => console.log(err))
    }
  },
  created: function() {
    axios.get('http://localhost:3000/api/books')
    .then(response => this.books = response.data)
    .catch(err => console.log(err))
  },
})
