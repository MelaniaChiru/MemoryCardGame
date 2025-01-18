const Resources = () => {
    let iconList = Level1();
    return ( 
        <>
            <h2>Resources</h2>
            <sections id="sec-icon">
                {iconList.map((icon)=>(
                    <section class="icon-sec">
                        <img src={icon.icon}/>
                        <section class="qty">x{icon.qty}</section>
                    </section>
                ))}
            </sections>
        </>
     );
}