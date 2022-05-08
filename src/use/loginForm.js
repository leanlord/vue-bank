import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export function useLoginForm() {
    const {handleSubmit, isSubmitting, submitCount} = useForm();
    const store = useStore();
    const router = useRouter();

    const {
        value: email, errorMessage: eError, handleBlur: eBlur
    } = useField('email', yup
        .string()
        .trim()
        .required('Please enter email')
        .email())
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password', yup
        .string()
        .trim()
        .required('Please enter password')
        .min(6))

    const isTooManyAttempts = computed(() => submitCount.value >= 3);
    watch(isTooManyAttempts, value => {
        if (value) {
            setTimeout(() => submitCount.value = 0, 3000)
        }
    })

    const onSubmit = handleSubmit(async values => {
        await store.dispatch('auth/login', values)
        router.push('/')
    })

    return {
        email, password, eError, pError, eBlur, pBlur, onSubmit, isTooManyAttempts, isSubmitting
    }
}
