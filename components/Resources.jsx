const Resources = ({resources}) => {
    return ( 
        <div className="resources">
            <h2>Resources</h2>
            <sections id="sec-icon">
                {resources.map((resource)=>(
                    <section class="icon-sec">
                        <img src={resource.icon}/>
                        <section class="qty">x{resource.qty}</section>
                    </section>
                ))}
            </sections>
        </div>
     );
}