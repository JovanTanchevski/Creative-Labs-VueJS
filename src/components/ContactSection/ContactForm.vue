<template>
  <div class="max-w-lg mx-auto">
    <div class="mb-10">
      <h2 class="font-black text-4xl mb-3">Contact us</h2>
      <p>Do you want to be a part of this network and amazing journey?</p>
      <p>Contact us, and we will get back to you.</p>
    </div>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <input
            placeholder="Name"
            v-model="formData.name"
            type="text"
            id="name"
            name="name"
            :class="{
              'border-red-500': nameError && !isValidInput(formData.name),
            }"
            class="w-full p-2 border rounded bg-neutral-100"
          />
        </div>
        <div>
          <input
            placeholder="Company"
            v-model="formData.company"
            type="text"
            id="company"
            name="company"
            :class="{
              'border-red-500': companyError && !isValidInput(formData.company),
            }"
            class="w-full p-2 border rounded bg-neutral-100"
          />
        </div>
      </div>
      <div>
        <input
          placeholder="Email"
          v-model="formData.email"
          type="email"
          id="email"
          name="email"
          :class="{
            'border-red-500': emailError && !isValidEmail(formData.email),
          }"
          class="w-full p-2 border rounded bg-neutral-100"
        />
      </div>
      <div class="pt-12">
        <textarea
          placeholder="Message"
          v-model="formData.message"
          id="message"
          name="message"
          :class="{
            'border-red-500': messageError && !isValidInput(formData.message),
          }"
          rows="4"
          class="w-full p-2 border rounded bg-neutral-100"
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button type="submit">
          <p
            class="text-base bg-light-green-bg-1 text-white font-semibold py-3.5 px-12"
          >
            Send
          </p>
        </button>
      </div>
    </form>

    <div v-if="messageSent" class="mt-4 text-green-600 font-medium">
      Message has been sent!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        company: '',
        email: '',
        message: '',
      },
      messageSent: false,
      nameError: false,
      companyError: false,
      emailError: false,
      messageError: false,
    };
  },
  methods: {
    submitForm() {
      this.nameError = !this.isValidInput(this.formData.name);
      this.companyError = !this.isValidInput(this.formData.company);
      this.emailError = !this.isValidEmail(this.formData.email);
      this.messageError = !this.isValidInput(this.formData.message);

      if (this.emailError) {
        alert('Please enter a valid email address');
      } else if (this.nameError || this.companyError || this.messageError) {
        alert('Name, Company, and Message fields cannot be empty');
      } else {
        this.messageSent = true;

        // Clear input fields after successful submission
        this.formData.name = '';
        this.formData.company = '';
        this.formData.email = '';
        this.formData.message = '';
      }
    },
    isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    },
    isValidInput(value) {
      return value.trim() !== '';
    },
  },
};
</script>
