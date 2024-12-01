import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },

  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
  { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
];

const Products = () => {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    // Redirect to the checkout page with the product details
    navigate('/checkout', { state: { product } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-t-lg w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <div className="mt-2 flex space-x-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;