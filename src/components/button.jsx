import { cn } from '../lib/utils';

export default function Button({ className, children, ...props }) {
    return (
        <button
            className={cn(
                'inline-flex items-center rounded-md border border-transparent bg-zinc-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-zinc-700 focus:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 active:bg-zinc-900',
                className,
            )}
            {...props}>
            {children}
        </button>
    );
}
