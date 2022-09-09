// export default class AvatarApp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       id: null,
//       avatar: null,
//       limit: 1,
//     };
//   }

//   counter = () => {
//     this.setState((prevState) => {
//       return {
//         limit: prevState.limit + 1,
//       };
//     });
//     console.log(this.state.limit);
//   };

//   componentDidMount() {
//     const url = `https://tinyfac.es/api/data?limit=${this.state.limit}&quality=0`;
//     fetch(url)
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           id: data[0].id,
//           avatar: data[0].url,
//         });
//       })
//       .catch((err) => console.log(err));
//   }

//   render() {
//     return (
//       <>
//         <ul>
//           <li key={this.state.id}>
//             {<CreateAvatar />}
//             {/* <img src={this.state.avatar} alt="avatar" className="avatar" /> */}
//           </li>
//         </ul>
//         <img onClick={this.counter} src="./img/add-button.png" className="addButton" alt="" />
//       </>
//     );
//   }
// }




// root.render(<AvatarApp />);
