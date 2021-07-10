
interface IHeaderItem
{
    Icon(props: React.ComponentProps<'svg'>): JSX.Element,
    title:string

}



function HeaderItem({Icon,title}:IHeaderItem) {
    
    return (
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-black dark:hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
 