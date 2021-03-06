import React from 'react';

import { Image , Box} from '@chakra-ui/react'


type PFCardProps = {
    img: string;
    projectname: React.ReactNode | string;
    paragraph: React.ReactNode | string;
    githubicon?: React.ReactNode;

}
export default function PFCard({img,projectname,paragraph,githubicon}:PFCardProps){

    return (

        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Image src={img} alt={img} />
            <Box   mt='1'  fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1} >
                {projectname}
            </Box>

            <Box>
                {paragraph}
            </Box>

            <Box>
                {githubicon}
            </Box>

        </Box>










    );



}