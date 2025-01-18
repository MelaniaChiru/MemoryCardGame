const Resources = (props) => {
    let iconList = props.icons;
    return ( 
        <>
            <h2>Resources</h2>
            <sections id="sec-icon">
                {iconList.map((icon)=>(
                    <section class="icon-sec">
                        <section class="icon">{icon.icon}</section>
                        <section class="qty">x{icon.qty}</section>
                    </section>
                ))}
            </sections>
        </>
     );
}