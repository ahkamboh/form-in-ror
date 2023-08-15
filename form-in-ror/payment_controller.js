
  
  
  import { Controller } from "@hotwired/stimulus"

  export default class extends Controller {
    // "cardNumber", "expirationDate", "cvv", 'cardName' => these are use for credit card validation
    static targets = ["cardNumber", "expirationDate", "cvv", 'cardName','creditCard', 'sadapay', 'jazzcash', 'easypaisa','creditCardBtn', 'sadapayBtn', 'jazzcashBtn', 'easypaisaBtn','formatMobileNo']
  
    cardName(event) {
      let cardName = event.target.value.substring(0, 40);
      this.cardNameTarget.value = cardName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
      this.validateCardName();
    }
  
    formatCardNumber(event) {
      let cardNumber = event.target.value.replace(/\D/g, '').substring(0, 16)
      cardNumber = cardNumber != '' ? cardNumber.match(/.{1,4}/g).join(' ') : ''
      this.cardNumberTarget.value = cardNumber;
      this.validateCardNumber()
    }
  
  
    formatExpirationDate(event) {
      let expirationDate = event.target.value.replace(/\D/g, '').substring(0, 4)
      expirationDate = expirationDate != '' ? expirationDate.match(/.{1,2}/g).join('/') : ''
      this.expirationDateTarget.value = expirationDate;
      this.validateExpirationDate()
    }
  
    formatCVV(event) {
      let cvv = event.target.value.replace(/\D/g, '').substring(0, 3)
      this.cvvTarget.value = cvv;
      this.validateCVV()
    }
  
    validateForm(event) {
      event.preventDefault();
      let cardNumberValid = this.validateCardNumber();
      let expirationDateValid = this.validateExpirationDate();
      let cvvValid = this.validateCVV();
      let cardNameValid = this.validateCardName();
  
      if (cardNumberValid && expirationDateValid && cvvValid && cardNameValid) {
        event.target.submit();
      }
    }
  
  
    validateCardNumber() {
      let cardNumberValid = this.cardNumberTarget.value.length === 19
      if (!cardNumberValid) {
        this.cardNumberTarget.classList.add("invalid")
      } else {
        this.cardNumberTarget.classList.remove("invalid")
      }
      return cardNumberValid
    }
  
    validateExpirationDate() {
      let expirationDateValid = this.expirationDateTarget.value.length === 5
      if (!expirationDateValid) {
        this.expirationDateTarget.classList.add("invalid")
      } else {
        this.expirationDateTarget.classList.remove("invalid")
      }
      return expirationDateValid
    }
  
    validateCVV() {
      let cvvValid = this.cvvTarget.value.length === 3
      if (!cvvValid) {
        this.cvvTarget.classList.add("invalid")
      } else {
        this.cvvTarget.classList.remove("invalid")
      }
      return cvvValid
    }
    validateCardName() {
      let cardNameValid = /^[a-zA-Z\s]*$/.test(this.cardNameTarget.value);
      if (!cardNameValid) {
        this.cardNameTarget.classList.add("invalid");
      } else {
        this.cardNameTarget.classList.remove("invalid");
      }
      return cardNameValid;
    }
  
  
  
    formatMobileNo(event) {
      let  formatMobileNo = event.target.value.replace(/\D/g, '').substring(0, 11)
      this.formatMobileNoTarget.value =  formatMobileNo;
  
    }
  
   
    showForm(event) {
      const formName = event.currentTarget.dataset.formName;
      const forms = ['creditCard', 'sadapay', 'jazzcash', 'easypaisa'];
      const buttons = ['creditCardBtn', 'sadapayBtn', 'jazzcashBtn', 'easypaisaBtn'];
      forms.forEach(form => {
        if (form === formName) {
          this[form + 'Target'].classList.remove('hidden');
        } else {
          this[form + 'Target'].classList.add('hidden');
        }
      });
      buttons.forEach(button => {
        if (button === formName + 'Btn') {
            this[button + 'Target'].classList.add('nav-btn-color');
        } else {
            this[button + 'Target'].classList.remove('nav-btn-color');
        }
    });
    }
  
  }
  
  
  
  
    