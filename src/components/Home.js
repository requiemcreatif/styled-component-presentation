import styled from "styled-components";

const Home = ({images}) => {


/*MAIN CONTAINER*/
    const MainContainer = styled.div`
        margin: 0 auto;
        max-width: 1300px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    `
/*STYLING NAVBAR*/

    const Navbar = styled.nav`
        padding: 2rem;
        background-color: #026E81;
        
    `
    const UnorderedList = styled.ul`
        display: flex;
        list-style: none;
        justify-content: space-around;

    `
    const Link = styled.a`
        text-decoration: none;
        color: white;
    `
    /*STYLING HEADER*/
    const Heading = styled.h1`
        text-align: center;
        font-size: 3rem;
        text-transform: uppercase;
        padding: 1.5rem;
        color: #FF9933;
    `

    const SmallHeading = styled.h2`
    text-align: center;
    text-transform: uppercase;
    padding: 1.5rem;
    color: #0099DD;
    `
    /*TOP PART*/
    const TopPart = styled.section`
        padding: 3rem;
    `

    /* TEXT PART*/
    const TextPart = styled.div`
        background-color: #F2F2F2;
        border-radius: 10px;
        padding: 2rem;
    `

    /*IMAGE CONTAINER */
    const ImageSection = styled.section`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        padding: 3rem;
        background-color: #F2F2F2;
        // 1 column
        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    `
    const ImageContainer = styled.div`
        display: flex;
        flex-direction: column;
        border-radius: 10px;
    `
    const Image = styled.img`
        width: 100%;
        border-radius: 10px 10px 0 0;
    `

    const ImageText = styled.div`
        padding: 1rem; 
        border-radius: 0 0 10px 10px;
        border: 1px solid #ccc;
    `
    /*FOOTER*/
    const Footer = styled.footer`
        text-align: center;
        background-color: #00ABBD;
        padding: 2rem;
    `

    return ( 
        <MainContainer>
        {/* PART 1 */}
            <Navbar>
                <UnorderedList>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">About us</Link></li>
                    <li><Link href="#">News</Link></li>
                    <li><Link href="#">Contact</Link></li>
                </UnorderedList>
            </Navbar>
            {/* PART 2 */}

            <section>
                <img src="https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="" />
            </section>
            <TopPart>
                    <Heading>Styled Components</Heading>
                    <SmallHeading>This is what you can do with Styled Component</SmallHeading>
                <TextPart>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo totam cupiditate voluptatum. Reiciendis autem consequatur iusto suscipit expedita amet exercitationem, inventore, possimus nesciunt corporis aperiam quibusdam facere? Saepe, nam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo totam cupiditate voluptatum. Reiciendis autem consequatur iusto suscipit expedita amet exercitationem, inventore, possimus nesciunt corporis aperiam quibusdam facere? Saepe, nam?</p>
                </TextPart>
                
            </TopPart>
            {/* PART 3 */}
            <main>
            <ImageSection>  
                {images.map((image) => (
                    <ImageContainer>
                        
                        <Image src={image.imgUrl} alt="" />
                        <ImageText>
                        <h2>{image.title} </h2>
                        <p>{image.text} </p>
                        </ImageText>
                    </ImageContainer>
                ))}  
            </ImageSection>

            </main>
            {/* PART 4 */}
            <Footer>
                <p>©Copyrights Team Omeruta | Masterschool 2022</p>
            </Footer>
        </MainContainer>
     );
}
 
export default Home;