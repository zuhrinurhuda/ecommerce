var app = new Vue({
  el: '#app',
  data: {
    books: [],
    message: 'Hello World',
    itemLists: [],
    itemCount: 0,
    carts: [],
    total: 0
  },
  methods: {
    addToChart: function(book) {
      // transactions obj
      let transactions = {
        title: book.title,
        qty: 1,
        price: book.price,
        subTotal: book.price
      }

      // check index
      let uniqueIndex = this.carts.findIndex(el => {
        return el.title === book.title
      })

      // conditional for add to chart
      if(this.carts.length == 0) {
        this.carts.push(transactions)
      } else {
        if(uniqueIndex === -1) {
          this.carts.push(transactions)
        } else {
          // get subtotal price
          this.carts[uniqueIndex].qty++
          this.carts[uniqueIndex].subTotal = this.carts[uniqueIndex].price * this.carts[uniqueIndex].qty
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

      console.log(this.carts);
    }
  },
  created: function() {
    axios.get('http://localhost:3000/api/books')
    .then(response => {
      this.books = response.data
    })
    .catch(err => console.log(err))
  },
})
