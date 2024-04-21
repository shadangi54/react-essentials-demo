function handleClick(val){
    console.log(val);
}

function TabButton({children, onSelect, isSelected, ...props}){
    return(
        <li>
            <button className={isSelected?"active":undefined} {...props}>
                {children}
            </button>
        </li>
    );
}
export default TabButton;