export default function ValueCard({ icon = null, title, description, showIcon = true, className = "", titleClassName = "", descriptionClassName = "" }) {
  return (
    <div 
      className={[
        "w-[360px] h-[340px] rounded-[30px] opacity-100 bg-[url('/Images/CardBG.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start px-8 ",
        showIcon ? "pt-8" : "pt-10",
        className
      ].join(" ")}
    >
      {/* Icon */}
      {showIcon && (
        <div className="mb-6">
          <img 
            src={icon} 
            alt={title}
            width={64}
            height={64}
            className="w-16 h-16"
            
          />
        </div>
      )}
      
      {/* Title */}
      <h3 className={["card-title-isenheim text-black mb-6 text-center mt-2 navbar-text", titleClassName].join(" ")}>
        {title}
      </h3>
      
      {/* Description */}
      <p className={["card-description about-card-desc text-black text-center max-w-[300px]", descriptionClassName].join(" ")}>
        {description}
      </p>
    </div>
  );
}
