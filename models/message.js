import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
	senderEmail: {
		type: String,
		required: true,
	},
	senderName: {
		type: String,
		required: true,
	},
	senderRole: {
		type: String,
		enum: ["user", "admin"],
		required: true,
	},
	category: {
		type: String,
		enum: ["chat", "orders", "activity", "promo"],
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: ["pending", "replied", "closed"],
		default: "pending",
	},
	replies: [
		{
			senderEmail: {
				type: String,
				required: true,
			},
			senderName: {
				type: String,
				required: true,
			},
			senderRole: {
				type: String,
				enum: ["user", "admin"],
				required: true,
			},
			message: {
				type: String,
				required: true,
			},
			createdAt: {
				type: Date,
				default: Date.now,
			},
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
	// Whether admin has read/seen this message in the admin panel
	adminRead: {
		type: Boolean,
		default: false,
	},
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
