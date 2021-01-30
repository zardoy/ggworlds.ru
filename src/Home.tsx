import React, { useState } from "react";

import { motion } from "framer-motion";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    makeStyles,
    Step,
    StepLabel,
    Stepper
} from "@material-ui/core";

interface ComponentProps {
}

const useStyles = makeStyles({
    root: {
        height: "100vh"
    },
    title: {
    },
});

let Home: React.FC<ComponentProps> = () => {
    const [orderDialogOpen, setOrderDialogOpen] = useState(false);
    const [activeStep] = useState(0);
    const classes = useStyles();

    return <>
        <Dialog open={orderDialogOpen} onClose={() => setOrderDialogOpen(false)}>
            <DialogTitle>Заказ Рояля</DialogTitle>
            <DialogContent>
                <Stepper activeStep={activeStep}>
                    <Step>
                        <StepLabel>Описание</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Оплата</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Доставка</StepLabel>
                    </Step>
                </Stepper>
                {
                    activeStep === 0 ? <>
                        Новый модель рояля "Дмитрий" позволяет вам не только понтаваться в новом мире искусства, но и также извлекать из своей жизни по-максимум каефа.
                        В модели присутствует:
                        <ul>
                            <li>Функция самонастройки прямо из коробки!</li>
                            <li>Искусственный интеллект галактических масштабов</li>
                            <li>А так же изящная индивидуальность с неповторимой оригинальностью</li>
                        </ul>
                    </> :
                        activeStep === 1 ? <>
                            Оплачено!
                        </> : null
                }
            </DialogContent>
            <DialogActions>
                <Button>Оформить прямо сейчас!</Button>
            </DialogActions>
        </Dialog>
        <Grid container alignItems="center" justify="center" direction="column" className={classes.root}>
            <motion.div
                initial={{
                    scale: 0.9
                }}
                transition={{
                    duration: 2
                }}
                animate={{
                    scale: 1,
                    translateY: 0
                }}
            >
                {/* TODO ACCESSBILITY */}
                <img alt="GGworlds logo" src="https://i.imgur.com/LulXGQw.png" />
            </motion.div>
            <Button onClick={() => setOrderDialogOpen(true)}>Заказать Рояль</Button>
        </Grid>
    </>;
};

export default Home;
