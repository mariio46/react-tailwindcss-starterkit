import reactLogo from './assets/react.svg';
import Button from './components/button';
import Input from './components/input';
import Label from './components/label';
import { cn } from './lib/utils';
import viteLogo from '/vite.svg';

function Vite({ className, ...props }) {
    return (
        <img
            src={viteLogo}
            className={cn('w-16 animate-pulse [animation-duration:5s]', className)}
            alt='Vite logo'
            {...props}
        />
    );
}

function React({ className, ...props }) {
    return (
        <img
            src={reactLogo}
            className={cn('w-16 animate-spin [animation-duration:5s]', className)}
            alt='React logo'
            {...props}
        />
    );
}

export default function App() {
    return (
        <>
            <div className='flex min-h-screen max-w-screen-2xl flex-col items-center justify-center gap-y-5'>
                <div className='flex items-center justify-center gap-x-4'>
                    <Vite /> <React />
                </div>
                <div className=' w-full max-w-[30rem] border border-zinc-200 p-5 min-[510px]:rounded-xl'>
                    <div className='w-full space-y-1'>
                        <h1 className='text-2xl font-bold text-zinc-800'>Login</h1>
                        <p className='text-sm text-zinc-600'>Let&apos;s login and jump to your dashboard.</p>
                    </div>
                    <div className='mt-5'>
                        <Label htmlFor='email' value={'email'} />
                        <Input name='email' id='email' />
                    </div>
                    <div className='mt-3'>
                        <Label htmlFor='password' value={'password'} />
                        <Input type='password' name='password' id='password' />
                    </div>
                    <div className='mt-5 flex justify-end'>
                        <Button type='submit'>Login</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
