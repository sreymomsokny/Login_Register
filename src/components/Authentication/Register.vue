<template>
    <!-- lets use the base-card -->
    <base-card>
        <h2>Register Here</h2>
        <form>
            <div class="form-control">
                <label for="fullname">Full name</label>
                <input type="text" v-model="formDataRegister.fullName" name="fullname" id="fullname" />
                <p>{{ msgError.fullName }}</p>
            </div>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" v-model="formDataRegister.email" name="email" id="email" />
                <p>{{ msgError.email }}</p>
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" v-model="formDataRegister.password" name="password" id="password" />
                <p>{{ msgError.password }}</p>
            </div>
        </form>
        <div>
            <base-button @click="submitFormRegister()" type="submit">Register</base-button>
        </div>
    </base-card>
</template>

<script>
export default {
    name: "Register",

    data() {
        return {
            formDataRegister: {
                fullName: "",
                email: "",
                password: "",
            },
            msgError: {
                fullName: "",
                email: "",
                password: "",
            },
            isClickRegister: false
        };
    },

    watch: {
        formDataRegister: {
            handler() {
                if(this.isClickRegister)  this.checkMsgError();
            },
            deep: true,
            isClickRegiste : false
        },
    },

    methods: {
        submitFormRegister() {
            this.isClickRegister = true;
            if (this.invalidForm()) return;
            localStorage.setItem("user", JSON.stringify(this.formDataRegister));
            this.formDataRegister();
        },

        invalidForm() {
            this.checkMsgError();
            return Object.values(this.msgError).some((error) => error);
        },

        checkMsgError() {
            this.msgError.fullName = this.$service.isCorrectFullName(this.formDataRegister.fullName);
            this.msgError.password = this.$service.isCorrectPassword(this.formDataRegister.password);
            this.msgError.email = this.$service.checkEmail(this.formDataRegister.email);
        },
    },
};
</script>

<style scoped>
input {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>
