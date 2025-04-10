const validateInput = (req, res, next) => {
      const { source, target, amount } = req.body;
    
      if (!source || !target || !amount || isNaN(amount)) {
        return res.status(400).json({ error: 'Invalid input' });
      }
    
      next(); // Move to next handler
    };
    
module.exports = validateInput;
    