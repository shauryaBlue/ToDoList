import React, { Component } from "react";
import { Box, Button, Typography, Tooltip } from "@material-ui/core";
import TodoItems from "./items";

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(e) {
		var itemArray = this.state.items;
		if (this._inputElement.value !== "") {
			itemArray.unshift({
				text: this._inputElement.value,
				key: Date.now()
			});
			this.setState({
				items: itemArray
			});
			this._inputElement.value = "";
		}
		console.log(itemArray);
		e.preventDefault();
	}

	deleteItem(key) {
		var filteredItems = this.state.items.filter(function (item) {
			return item.key !== key;
		});

		this.setState({
			items: filteredItems
		});
	}

	render() {
		return (
			<Box
				display="flex"
				flexDirection="column"
				style={{ alignItems: "center", padding: "5vh 0 5vh" }}
			>
				<Box display="flex" justifyContent="center" alignItems="center">
					<Typography
						variant="h3"
						style={{ marginBottom: "3vh", marginRight: "2vh" }}
					>
						To-do List
					</Typography>
					<Tooltip title="Click on an item when you're done !">
						<Button>
							<Typography style={{ fontSize: 8 }}>
								Help
							</Typography>
						</Button>
					</Tooltip>
				</Box>
				<Box className="header">
					<form onSubmit={this.addItem}>
						<input
							ref={a => (this._inputElement = a)}
							placeholder="Enter tasks here"
							style={{
								borderWidth: "0px 0px 1px 0px",
								marginRight: 20
							}}
						></input>
						<Button
							type="submit"
							variant="contained"
							style={{ textTransform: "none" }}
						>
							Add
						</Button>
					</form>
				</Box>

				<TodoItems
					entries={this.state.items}
					delete={this.deleteItem}
				/>
			</Box>
		);
	}
}

export default TodoList;
