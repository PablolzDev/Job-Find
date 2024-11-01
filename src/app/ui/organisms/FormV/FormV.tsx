"use client"
import React from 'react';
import ButtonM from '../../atoms/ButtonModal';
import InputContainer from '../../molecules/InputContainer/InputContainer';
import TitlePrimary from '../../atoms/Title';
import TextAreaContainer from '../../molecules/TextArea/TextArea';
import ModalContainer from '../../molecules/Modals/Modal';
import { useEffect, useState } from "react";
import Input from '../../atoms/input';
import TextArea from '../../atoms/TextA';
import { ContentVacancy, IPostVacancy } from "../../../../models/vacancie.model";
import { useRouter } from "next/navigation";
import { ApiService } from "../../../../services/api.service";
import styles from './FormV.module.scss'

interface IProps {
    titlePrimary: string;
    onClose: () => void;
    editButtonLabel: string;
    idCard: string
}


const useVacancierServices = new ApiService()

export default function FormV({ titlePrimary, onClose, editButtonLabel}: IProps) {
    const router = useRouter();
    const [vacantData, setVacantData] = useState<ContentVacancy>();

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = Object.fromEntries(
            new FormData(event.target as HTMLFormElement).entries()
        );
        console.log(formData);

        try {
            if (vacantData) {
                await useVacancierServices.post("vacants", formData as unknown as IPostVacancy);
            }
            router.refresh();
            onClose()
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <ModalContainer onClose={onClose}>
            <TitlePrimary>{titlePrimary}</TitlePrimary>
            <form action="" className={styles.Form} onSubmit={onFormSubmit}>
                <InputContainer label="Título">
                    <Input name="title" required={true} />
                </InputContainer>
                <TextAreaContainer label="Descripción">
                    <TextArea name="description" required={true} defaultValue={vacantData?.description} />
                </TextAreaContainer>
                <ButtonM title='Button Vacancie'>
                    {editButtonLabel}
                </ButtonM>
            </form>
        </ModalContainer>
    );
}
