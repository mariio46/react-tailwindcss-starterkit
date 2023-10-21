import { cn } from '../lib/utils';

export default function Input({ type = 'text', className, ...props }) {
    return (
        <input
            type={type}
            className={cn(
                'mt-1 w-full rounded-md border border-zinc-300 px-2 py-2 text-sm transition duration-300 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:ring-offset-2',
                className,
            )}
            {...props}
        />
    );
}
