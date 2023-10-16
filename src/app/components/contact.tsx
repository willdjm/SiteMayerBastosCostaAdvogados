import * as yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Contact() {

const [failMessage, setFailMessage] = useState(false);
const [successMessage, setSuccessMessage] = useState(false);

const notifySucess = () => toast.success('Mensagem enviada com sucesso!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});

return (

<section id="Contact" className='flex justify-center flex-col items-center '>
<ToastContainer
    position="bottom-center"
    autoClose={5000}
    limit={1}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
/>
<div className='flex flex-col justify-between justify-items-center lg:max-w-6xl w-full lg:py-28 py-5'>
<div className="flex flex-wrap justify-center">
<div className="flex flex-col items-center lg:items-start gap-4 w-full lg:mb-0 lg:w-96 lg:px-6">
    <h3 className="lg:text-4xl text-5xl">Contato</h3>
    <p className="text-center lg:text-left">
        Deixe sua mensagem. <br /> Assim que possível <br /> entraremos em contato.
    </p>
</div>
<div className="w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:max-w-3xl lg:w-full p-5">

    <div className='col-span-4 lg:col-span-6 lg:col-start-4'>
        <Formik
            initialValues={{
                nome: '',
                telefone: '',
                email: '',
                mensagem: ''
            }}
            validationSchema={yup.object({
                nome: yup.string().min(3, 'O campo nome deve ter no mínimo 3 caracteres').required('Campo obrigatório'),
                email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
                telefone: yup.string().required('Campo obrigatório'),
                mensagem: yup.string().required('Campo obrigatório')
            })}
            onSubmit={async (values, { resetForm }) => {
                await new Promise((r) => setTimeout(r, 1500));
                notifySucess();
                fetch('/sendmail.php', {
                    method: 'POST',
                    body: JSON.stringify(values)  
                }).then(res => {
                    res.status === 200 ? setSuccessMessage(true) : setFailMessage(true);
                    resetForm({});
                })
            }}
        >
            {({ errors, values, touched, isSubmitting }) => (
                <Form>
                    <ul className='flex mb-4'>
                        <li className='w-full'>
                            <Field
                                className={`${errors.nome ? 'bg-baby-gray' : 'bg-white'} peer block min-h-[auto] w-full rounded-md focus:border-black border py-2 px-3 outline-none shadow-md`}
                                name='nome'
                                placeholder='Nome'
                                type='text'
                                value={values.nome}
                            />
                            {errors.nome && touched.nome && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>{errors.nome}</p>}
                        </li>
                    </ul>
                    <ul className='flex mb-4'>
                        <li className='w-full'>
                            <Field
                                className={`${errors.telefone ? 'border-gray-300' : 'bg-white'} peer block min-h-[auto] w-full rounded-md focus:border-black border py-2 px-3 outline-none shadow-md`}
                                name='telefone'
                                placeholder='Telefone'
                                type='text'
                                value={values.telefone}
                            />
                            {errors.telefone && touched.telefone && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>{errors.telefone}</p>}
                        </li>
                    </ul>
                    <ul className='flex mb-4'>
                        <li className='w-full'>
                            <Field
                                className={`${errors.email ? 'bg-baby-gray' : 'bg-white'} peer block min-h-[auto] w-full rounded-md focus:border-black border py-2 px-3 outline-none shadow-md`}
                                name='email'
                                placeholder='E-mail'
                                type='email'
                                value={values.email}
                            />
                            {errors.email && touched.email && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>{errors.email}</p>}
                        </li>
                    </ul>
                    <ul className='flex mb-4'>
                        <li className='w-full'>
                            <Field
                                as='textarea'
                                className={`${errors.mensagem ? 'bg-baby-gray' : 'bg-white'} peer block min-h-[auto] w-full rounded-md focus:border-black border py-2 px-3 outline-none shadow-lg place`}
                                name='mensagem'
                                placeholder='Mensagem:'
                                rows={5}
                                value={values.mensagem}
                            />
                            {errors.mensagem && touched.mensagem && <p className='text-sm italic text-red-500 flex flex-1 pl-1'>{errors.mensagem}</p>}
                        </li>
                    </ul>
                    {successMessage}
                    {failMessage &&
                        <ul className='flex pb-8'>
                            <li>
                                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 duration-1000 before:" role="alert">
                                    <span className="font-medium">Houve um erro em sua tentativa, tente novamente mais tarde!</span>
                                </div>
                            </li>
                        </ul>
                    }
                    <ul className='flex pb-20'>
                        <li className='flex w-full justify-end'>
                            <button
                                className='text-white bg-black focus:ring-4 focus:outline-none rounded-md text-base p-3 w-full lg:w-52 text-center disabled:cursor-not-allowed disabled:opacity-40'
                                type='submit'
                                disabled={isSubmitting}
                            >
                                <span>ENVIAR</span>
                            </button>
                        </li>
                    </ul>
                </Form>
            )}
        </Formik>
    </div>
</div>
</div>
</div>
</section>
);
}
