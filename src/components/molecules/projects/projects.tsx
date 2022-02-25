import { useState } from 'react';
import { IProjects } from "./Iprojects";
import styled from 'styled-components';
import Project from '../../atoms/project/project';
import { ArrowRightShort, ArrowLeftShort } from '@styled-icons/bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SProjects = styled.div`
    display: flex;
    gap: 30px;
    position: relative;
`

const SArrowRight = styled(ArrowRightShort)`
    position: absolute;
    width: 48px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: #695B32;
    border-radius: 100%;
    color: white;
    z-index: 99;
    cursor: pointer;
`

const SArrowLeft = styled(ArrowLeftShort)`
    position: absolute;
    width: 48px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background: #695B32;
    border-radius: 100%;
    color: white;
    z-index: 99;
    cursor: pointer;
`

export default function Projects({ projects, projectsTitle }: IProjects) {

    const [swipe, setSwipe] = useState<any>();

    return (
        <>
            <p>{projectsTitle}</p>
            <SProjects>
                <SArrowLeft onClick={() => swipe?.slidePrev()} />
                <Swiper
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    slidesPerView={2}
                    loop
                    onInit={(swiper) => {
                        setSwipe(swiper);
                    }}
                >
                    {
                        projects.map((project) => {
                            return (
                                <SwiperSlide key={project.name}>
                                    <Project urlPage={project.urlPage} imageUrl={project.imageUrl} name={project.name} githubUrl={project.githubUrl} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <SArrowRight onClick={() => swipe?.slideNext()} />
            </SProjects>
        </>
    )
}