export const fadeEffect ={
    initial: {
        opacity: 0,
        y:100,
    },
    animate:{
        opacity: 1,
        y: 0,
    },
};
export const staggerEffect ={
    initial: {
        
    },
    animate:{
        transition: {
            staggerChildren: 0.1,
        }
    },
};

export const routeAnimation ={
    initial: {
        opacity: 0,
    },
    animate:{
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.1,
            ease: "easeInOut",
        },
    },
};
