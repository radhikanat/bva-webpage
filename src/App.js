import './App.css';
import {
  Button,
  Container,
  Dropdown,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
} from 'semantic-ui-react'


function App() {
  return (
    <div>
      <Menu fixed='top' >
        <Container>
          <Menu.Item as='a'>BVA</Menu.Item>
          <Dropdown item simple text='About Us'>
            <Dropdown.Menu>
              <Dropdown.Item>About BVA</Dropdown.Item>
              <Dropdown.Item>About Srila Prabhupada</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item as='a'>Courses</Menu.Item>
          <Menu.Item as='a'>Contact Us</Menu.Item>
          <Menu.Item position='right'>
            <Button as='a' secondary basic>Log In</Button>
          </Menu.Item>
        </Container>
      </Menu>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid>
          <Grid.Row columns={4} padded='horizontally'>
            <Grid.Column width={3} textAlign='middle' padded>
            </Grid.Column>
            <Grid.Column width={3} textAlign='center' padded>
              <Header as='h1' style={{ fontSize: '3em' }}>
                Bhaktivedanta Academy
            </Header>
            </Grid.Column>
            <Grid.Column width={3} added>
            </Grid.Column>
            <Grid.Column width={7} textAlign='middle' padded>
              <Image src='/images/sp.png'/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column width={3} padded='horizontally'>
            </Grid.Column>
            <Grid.Column width={3} textAlign='center' padded='horizontally'>
              <p>
                Bhaktivendanta Academy is focused on engaging students in the systematic study of vedic literature through the teachings of A.C Bhaktivedanta Swami Srila Prabhupada.
			        </p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column width={3} padded='horizontally'>
            </Grid.Column>
            <Grid.Column width={3} textAlign='center' padded='horizontally'>
              <Button>Enroll Now</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '6em 0em' }} vertical>
        <Header as='h1' textAlign='center' style={{ fontSize: '2.75em' }}>
          Courses
        </Header>
        <Grid>
          <Grid.Row columns={3} padded>
            <Grid.Column width={2} textAlign='middle' padded>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='/images/image.png' size='small' />
            </Grid.Column>
            <Grid.Column width={6} textAlign='left'>
              <Header as='h3' style={{ fontSize: '1.5em' }}>
                Bhakti Sastri
            </Header>
              <p>
                This is the description This is the description This is the description This is the description This is the description 
			        </p>
              <p>
                This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description 
			        </p>
              <p>
                This is the description 
			        </p>
              <p>
                <Button>Learn More</Button>
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3} padded>
            <Grid.Column width={2} textAlign='middle' padded>
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src='../images/image.png' />
            </Grid.Column>
            <Grid.Column width={6} textAlign='left'>
              <Header as='h3' style={{ fontSize: '1.5em' }}>
                Demystifying the Bhagavad Gita
            </Header>
              <p>
                This is the description This is the description This is the description This is the description This is the description This is the description 
			        </p>
              <p>
                This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description This is the description 
			        </p>
              <p>
                <Button>Learn More</Button>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>


    </div>
  )
}
/*<Button>Hello World</Button>
<header className="App-header">
        
<Segment>You are good to go! Semantic UI is installed. You can start using Semantic UI components to style the pages now.</Segment>
<Button>Hello World</Button>
</header>*/

export default App;

/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/