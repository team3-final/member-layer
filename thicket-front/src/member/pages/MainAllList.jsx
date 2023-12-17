import { Wrapper, InvisibleScroll, MainContainer, DivList, RankCard, OpenCard, H1 } from "../../assets/css/setting/MainStyleCSS";

function MainAllList() {

    return (
        <Wrapper>
            <div>
                광고주님 광고 부탁드립니다
            </div>
            <InvisibleScroll>
                <MainContainer>
                    <H1> 뮤지컬 Top5.</H1>
                    <DivList>
                        <RankCard rank={1}/>
                        <RankCard rank={2}/>
                        <RankCard rank={3}/>
                        <RankCard rank={4}/>
                        <RankCard rank={5}/>
                    </DivList>
                    <H1> 연극 Top5.</H1>
                    <DivList>
                        <RankCard rank={1}/>
                        <RankCard rank={2}/>
                        <RankCard rank={3}/>
                        <RankCard rank={4}/>
                        <RankCard rank={5}/>
                    </DivList>
                    <H1> 콘서트 Top5.</H1>
                    <DivList>
                        <RankCard rank={1}/>
                        <RankCard rank={2}/>
                        <RankCard rank={3}/>
                        <RankCard rank={4}/>
                        <RankCard rank={5}/>
                    </DivList>
                    <H1> 티켓오픈 </H1>
                    <DivList>
                        <OpenCard date={"2023-11-16"}/>
                        <OpenCard date={"2023-11-17"}/>
                        <OpenCard date={"2023-12-18"}/>
                        <OpenCard date={"2023-11-19"}/>
                        <OpenCard date={"2023-11-20"}/>
                        <OpenCard date={"2023-12-21"}/>
                    </DivList>
                </MainContainer>
            </InvisibleScroll>
            <div>
                광고주님 광고 부탁드립니다
            </div>
        </Wrapper>
    )
}

export default MainAllList;