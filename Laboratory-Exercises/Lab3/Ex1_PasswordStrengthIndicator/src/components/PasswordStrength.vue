<template>
  <h1>Vue Password Strength Indicator</h1>
  <label class="frmLabel" for="password">Password</label>
  <input placeholder="Enter your password" name="password" id="password" class="frmField" type="password" @input="message" v-model="message" />
  <p class="frmValidation" :class="{'frmValidation--passed' : message.length > 7}">
    <i class="frmIcon fas" :class="message.length > 7 ? 'fa-check' : 'fa-times'"></i>
    Longer than 7 characters
  </p>
  <p class="frmValidation" :class="{'frmValidation--passed' :has_uppercase }">
    <i class="frmIcon fas" :class="has_uppercase ? 'fa-check' : 'fa-times'"></i>
    Has a capital letter
  </p>
  <p class="frmValidation" :class="{'frmValidation--passed' :has_lowercase }">
    <i class="frmIcon fas" :class="has_lowercase ? 'fa-check' : 'fa-times'"></i>
    Has a lowercase letter
  </p>
  <p class="frmValidation" :class="{'frmValidation--passed' : has_number }">
    <i class="frmIcon fas" :class="has_number ? 'fa-check' : 'fa-times'"></i>
    Has a number
  </p>
  <p class="frmValidation" :class="{'frmValidation--passed' : has_special }">
    <i class="frmIcon fas" :class="has_special ? 'fa-check' : 'fa-times'"></i>
    Has a special character
  </p>

  <p>{{message}}</p>

</template>

<script>
export default {
  name: "PasswordStrength",
  data() {
    return {
      message: "",
    };
  },
  computed: {
    has_uppercase() {
      return /[A-Z]/.test(this.message);
    },
    has_lowercase() {
      return /[a-z]/.test(this.message)
    },
    has_number() {
      return /[0-9]/.test(this.message);
    },
    has_special() {
      return /[!@#$%^&*(),.?":{}|<>]/.test(this.message);
    }
  },
}
</script>







