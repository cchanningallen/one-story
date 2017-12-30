import 'typeface-roboto'
import './App.css';

import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import grey from 'material-ui/colors/grey';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import RadioButtonUncheckedIcon from 'material-ui-icons/RadioButtonUnchecked';
import Markdown from 'react-markdown';

import GlobalLoader from './GlobalLoader';

const spacing = {
  none: 0,
  xs: 8,
  sm: 16,
  md: 24,
  lg: 40,
};

const theme = createMuiTheme();

const AppShell = styled.div`
  height: 100%;
  background: #fff;  
`;

const MainContainer = styled.div`
  padding: ${spacing.md}px;
`;

const Title = props => <Typography type="title" {...props} />;
const Text = props => <Typography type="body1" style={{ whiteSpace: 'pre-wrap', display: 'inline-block' }} {...props} />;
const Caption = props => <Typography type="caption" {...props} />;

const HappyAvatar = withStyles({
  avatar: {
    color: grey[500],
    backgroundColor: grey[100],
  },
})(({ classes, ...props }) => (
  <Avatar {...props} className={classes.avatar}>
    <RadioButtonUncheckedIcon />
  </Avatar>
));

const LogEntry = styled(({ category, content, datetime, ...props }) => (
  <div {...props}>
    <div style={{ width: spacing.lg }}>
      <HappyAvatar />
    </div>
    <div style={{ marginLeft: spacing.sm, marginTop: 10 }}>
      <Text gutterBottom>
        {category === 'feeling' && <Text color="secondary">feeling </Text>}{content}
      </Text>
      <Caption>{moment(datetime).format('ddd, hA')}</Caption>
      <Caption>{category}</Caption>
    </div>
  </div>
))`
  width: 100%;
  display: flex;
  margin-top: ${spacing.lg}px;
`;

class App extends Component {
  state = { loading: true };

  componentDidMount() {
    this.fetch('api/log_entries')
      .then(logEntries => this.setState({ logEntries, loading: false }));
  }

  renderLogEntries(logEntries) {
    return logEntries.map(logEntry => <LogEntry {...logEntry} />)
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
    })
  }

  render() {
    const { logEntries } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <AppShell>
          {!logEntries && <GlobalLoader />}
          <AppBar position="static" color="default">
            <Toolbar>
              <Title color="secondary">One</Title>
              <Title>Story</Title>
            </Toolbar>
          </AppBar>

          <MainContainer>
            {logEntries && this.renderLogEntries(logEntries)}
          </MainContainer>
        </AppShell>
      </MuiThemeProvider>
    );
  }
}

export default App;
