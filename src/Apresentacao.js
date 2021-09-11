const MainContainer = styled(View, {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
}, {forwardRef: true});
 
const DefaultText = styled(Text, {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#333',
});
 
const RedText = styled(DefaultText, {
    color: 'red',
});
 
const GreenText = styled(DefaultText, {
    color: 'green',
});
 
const ColorText = styled(DefaultText, props => ({
    color: props.color,
}));
 
class App extends Component {
 
    mainContainerRef;
 
    render() {
        return (
            <MainContainer ref={ref => this.mainContainerRef = ref}>
                <DefaultText>Default Text</DefaultText>
                <RedText>Red Text</RedText>
                <GreenText>Green Text</GreenText>
                <DefaultText style={{fontSize: 20, color: 'green'}}>Big Green Text</DefaultText>
                <ColorText color='blue'>Color Text</ColorText>
            </MainContainer>
        );
    }
}
 
export default App;