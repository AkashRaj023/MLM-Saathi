
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getNetworkInsights = async (networkData: any) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this MLM network performance data for Akash Raj: ${JSON.stringify(networkData)}. Focus on growth and compliance.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            opportunities: { type: Type.ARRAY, items: { type: Type.STRING } },
            riskWarnings: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["summary", "opportunities", "riskWarnings"]
        }
      }
    });
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("AI Insight Error:", error);
    return { summary: "Insight service currently unavailable.", opportunities: [], riskWarnings: [] };
  }
};

export const analyzeMerchantNode = async (merchant: any) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Perform a professional financial and operational analysis for merchant node: ${JSON.stringify(merchant)}. Identify stability trends, velocity bottlenecks, and provide a strategic recommendation.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            nodeHealth: { type: Type.STRING, description: "One word health status" },
            efficiencyScore: { type: Type.NUMBER },
            strategicAnalysis: { type: Type.STRING },
            projections: { type: Type.ARRAY, items: { type: Type.STRING } },
            bottlenecks: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["nodeHealth", "efficiencyScore", "strategicAnalysis", "projections", "bottlenecks"]
        }
      }
    });
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Merchant Analysis Error:", error);
    return { 
      nodeHealth: "UNCERTAIN", 
      efficiencyScore: 0, 
      strategicAnalysis: "Analysis engine timed out.", 
      projections: ["Data stream interrupted"], 
      bottlenecks: ["Connection error"] 
    };
  }
};

export const handleSupportQuery = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the Support Assistant for MLM Nexus. Resolve this query professionally: "${query}". If it's complex, state that a human agent will take over.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            resolution: { type: Type.STRING },
            needsEscalation: { type: Type.BOOLEAN },
            suggestedAction: { type: Type.STRING }
          },
          required: ["resolution", "needsEscalation"]
        }
      }
    });
    return JSON.parse(response.text.trim());
  } catch (error) {
    return { resolution: "Service error. Please try again later.", needsEscalation: true };
  }
};
