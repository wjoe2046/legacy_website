<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="8">
        <h2>Donations</h2>
        <p>
          We're still in the process of setting up a donations system. Check
          back here in a few days!
        </p>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <v-row align="center">
              <v-col cols="1" class="dolla-sign" justify="end">
                $
              </v-col>
              <v-col cols="11" md="3" style="padding-left:0"
                ><v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Amount"
                ></v-text-field
              ></v-col>
            </v-row>
          </v-container>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Make this a recurring monthly donation"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Validate
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset">
            Reset Form
          </v-btn>

          <v-btn color="warning" @click="resetValidation">
            Reset Validation
          </v-btn>
        </v-form>
        <p>
          We have been approved as a not-for-profit organization in the state of
          Arizona. We have submitted the required application with the IRS, and
          are awaiting their response and our 501(c)(3) letter. Per the IRS
          regulations, while this application is pending, we are allowed to
          operate as a 501(c)(3) charitable organization and are eligible to
          receive tax deductible, charitable contributions.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style>
.dolla-sign {
  font-size: 35px;
  padding-right: 0;
  padding-left: 0;
  text-align: center;
  color: #779f98;
}
</style>